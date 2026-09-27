FROM busybox:latest

COPY . /www

EXPOSE 8080

CMD ["httpd", "-f", "-v", "-p", "80", "-h", "/www"]