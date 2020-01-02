# mersocarlin/puppeteer

## ⭐ Features

✅ Run headless Chrome Node.js tests in a Docker container.

## 📖 How to

In `Dockerfile` file: 

```
FROM mersocarlin/puppeteer

# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

# copy package.json, yarn.lock (or package-lock.json) and install dependencies
ADD package.json yarn.lock /app/

RUN yarn --pure-lockfile

COPY . /app/

CMD [ "yarn", "test" ]
```

For more information, please refer to the [examples](examples) folder.
