FROM nginx
LABEL description="This is a custom nginx image for the projects.nikolaipatrick.com Hugo site"
LABEL maintainer="Nikolai Patrick (nikolai@artichoknetwork.com)"
COPY . /data/build
WORKDIR /data/build
RUN apt-get update && apt-get install -y hugo
RUN hugo
RUN cp -r public/* /usr/share/nginx/html/
EXPOSE 80