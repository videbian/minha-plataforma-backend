{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ NestFactory \} from '@nestjs/core';\
import \{ AppModule \} from './app.module';\
\
async function bootstrap() \{\
  const app = await NestFactory.create(AppModule);\
  \
  // Enable CORS for frontend communication\
  app.enableCors(\{\
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',\
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',\
    credentials: true,\
  \} );\
  \
  const port = process.env.PORT || 3000;\
  await app.listen(port);\
  console.log(`Application is running on: http://localhost:$\{port\}` );\
\}\
bootstrap();\
}