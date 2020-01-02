FROM mersocarlin/puppeteer

# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

# copy package.json, yarn.lock and install dependencies
ADD package.json yarn.lock /app/

RUN yarn --pure-lockfile

COPY . /app/

CMD [ "yarn", "test" ]
