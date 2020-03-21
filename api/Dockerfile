FROM python:3.7-alpine as base                                                                                                
                                                                                                                              
FROM base as builder                                                                                                                    
RUN mkdir /install
RUN apk update && apk add postgresql-dev build-base linux-headers pcre-dev gcc python3-dev musl-dev                                                             
WORKDIR /install
COPY requirements.txt /requirements.txt
RUN pip install --install-option="--prefix=/install" -r /requirements.txt

FROM base

COPY --from=builder /install /usr/local
RUN apk --no-cache add libpq pcre-dev
COPY * /api/
WORKDIR /api
RUN chmod +x uwsgi_starter.sh
ENTRYPOINT ["./uwsgi_starter.sh"]