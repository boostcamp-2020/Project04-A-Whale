FROM node:14.9.0
MAINTAiNER jangky000 <jangky000@mme.dongguk.edu> mistercle <mistercle@gmail.com> yeji9175 <yeji2039@gmail.com>

RUN mkdir -p /temp
WORKDIR /temp/server
ADD . /temp
RUN npm install

ENV NODE_ENV development

EXPOSE 8000

CMD ["npm", "start"]