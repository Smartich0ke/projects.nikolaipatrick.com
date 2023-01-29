FROM nginx
LABEL description="This is a custom nginx image for the projects.nikolaipatrick.com Hugo site"
LABEL maintainer="Nikolai Patrick (nikolai@artichoknetwork.com)"
COPY . /data/build
WORKDIR /data/build
RUN apt-get update && apt-get install -y hugo git
RUN git submodule update --init --recursive
RUN hugo
RUN yes | cp -rf public/* /usr/share/nginx/html/
EXPOSE 80