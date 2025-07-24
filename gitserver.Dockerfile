FROM node:alpine

RUN apk add --no-cache tini git \
    && yarn global add git-http-server \
    && adduser -D -g git git

USER git
WORKDIR /home/git

# Set Git identity configuration
RUN git config --global user.name "Your-full-name" \
    && git config --global user.email "Your-sit-email"

RUN git init --bare repository.git

ENTRYPOINT ["tini", "--", "git-http-server", "-p", "3000", "/home/git"]
