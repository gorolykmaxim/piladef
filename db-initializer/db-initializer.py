import hashlib
import random
import asyncio

import aiohttp
from aiohttp.hdrs import METH_GET, METH_POST, METH_PUT
from collections import namedtuple


Database = namedtuple('Database', ['name', 'collections'])
Collection = namedtuple('Collection', ['name', 'items'])


USERNAME = 'admin'
PASSWORD = 'changeit'
HOST = 'restheart'
PORT = 8080
URL = 'http://{host}:{port}'.format(host=HOST, port=PORT)
DATABASE_TEMPLATE = URL + '/{database}'
COLLECTION_TEMPLATE = DATABASE_TEMPLATE + '/{collection}'
ITEM_TEMPLATE = COLLECTION_TEMPLATE + '/'


def encode(value: str) -> str:
    m = hashlib.md5()
    m.update(value.encode())
    return m.hexdigest()


def get_amount() -> int:
    return random.randint(0, 500)


def get_price() -> int:
    return random.randint(1, 99999)


def get_products() -> list:
    return ['Skateboard', 'TV', 'PC', 'Laptop', 'Tablet', 'Sofa', 'Chair', 'Car', 'House', 'Yacht',
            'Phone', 'Smartphone', 'Mouse', 'Keyboard', 'Speakers', 'Microphone', 'Lamp', 'Table',
            'Playstation', 'Xbox']


def get_database() -> Database:
    return Database(name='shop', collections=[
        Collection(name='user', items=[
            {'login': 'vlad', 'password': encode('12345'), 'shoppingBasket': []},
            {'login': 'tom', 'password': encode('54321'), 'shoppingBasket': []},
            {'login': 'frank', 'password': encode('qwerty'), 'shoppingBasket': []}
        ]),
        Collection(name='product', items=[
            {'name': product, 'amount': get_amount(), 'price': get_price()} for product in get_products()
        ])
    ])


def is_successfull(code):
    return 200 <= code <= 399


async def handle_request(session: aiohttp.ClientSession, method: str, url: str, body = None):
    last_error = None
    for i in range(10):
        try:
            async with session.request(method, url, json=body, headers={'Content-Type': 'application/json'}) as response:
                assert is_successfull(response.status)
                return
        except aiohttp.ClientConnectionError as e:
            last_error = e
            print('Attempt #{}: failed to execute {} to {}: {}'.format(i + 1, method, url, e))
            await asyncio.sleep(1)
    raise last_error


async def get(session: aiohttp.ClientSession, url: str):
    await handle_request(session, METH_GET, url)


async def post(session: aiohttp.ClientSession, url: str, body=None):
    await handle_request(session, METH_POST, url, body=body)


async def put(session: aiohttp.ClientSession, url: str, body=None):
    await handle_request(session, METH_PUT, url, body=body)


async def create_database(session: aiohttp.ClientSession, database: str):
    print('Creating database "{}"'.format(database))
    await put(session, DATABASE_TEMPLATE.format(database=database))
    print('Successfully created database "{}"'.format(database))


async def create_collection(session: aiohttp.ClientSession, database: str, collection: str):
    print('Creating collection "{}" in the database "{}"'.format(collection, database))
    await put(session, COLLECTION_TEMPLATE.format(database=database, collection=collection))
    print('Successfully created collection "{}" in the database "{}"'.format(collection, database))


async def add_item_to_collection(session: aiohttp.ClientSession, database: str, collection: str, item: dict):
    print('Adding "{}" to "{}" collection in the "{}" database'.format(item, collection, database))
    await post(session, ITEM_TEMPLATE.format(database=database, collection=collection), body=item)
    print('Successfully added "{}" to "{}" collection in the "{}" database'.format(item, collection, database))


async def is_database_exist(session: aiohttp.ClientSession, database: str) -> bool:
    try:
        await get(session, DATABASE_TEMPLATE.format(database=database))
        return True
    except aiohttp.ClientResponseError:
        return False


async def main():
    print('Initializing shop...')
    database = get_database()
    with aiohttp.ClientSession(raise_for_status=True, auth=aiohttp.BasicAuth(USERNAME, PASSWORD)) as session:
        if await is_database_exist(session, database.name):
            print('Shop is already exist! Skipping initialization')
        else:
            print('Creating a shop...')
            await create_database(session, database.name)
            for collection in database.collections:
                await create_collection(session, database.name, collection.name)
                for item in collection.items:
                    await add_item_to_collection(session, database.name, collection.name, item)
    print('Shop initialization complete')


if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())
