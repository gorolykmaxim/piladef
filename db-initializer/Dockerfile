FROM python:3
COPY ./* /home/db-initializer/
RUN pip install -r /home/db-initializer/requirements.txt
ENTRYPOINT ["python3", "/home/db-initializer/db-initializer.py"]