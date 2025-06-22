{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Module \} from '@nestjs/common';\
import \{ ConfigModule \} from '@nestjs/config';\
import \{ TypeOrmModule \} from '@nestjs/typeorm';\
import \{ PartnerModule \} from './partner/partner.module';\
import \{ OnboardingModule \} from './onboarding/onboarding.module';\
import \{ DocumentGenerationModule \} from './document-generation/document-generation.module';\
import \{ BrandingModule \} from './branding/branding.module';\
import \{ AdminDashboardModule \} from './admin-dashboard/admin-dashboard.module';\
\
@Module(\{\
  imports: [\
    ConfigModule.forRoot(\{\
      isGlobal: true,\
    \}),\
    TypeOrmModule.forRoot(\{\
      type: 'postgres',\
      host: process.env.DB_HOST || 'localhost',\
      port: parseInt(process.env.DB_PORT) || 5432,\
      username: process.env.DB_USERNAME || 'postgres',\
      password: process.env.DB_PASSWORD || 'password',\
      database: process.env.DB_NAME || 'prm_caas',\
      entities: [__dirname + '/**/*.entity\{.ts,.js\}'],\
      synchronize: process.env.NODE_ENV !== 'production', // Only for development\
      logging: process.env.NODE_ENV === 'development',\
    \}),\
    PartnerModule,\
    OnboardingModule,\
    DocumentGenerationModule,\
    BrandingModule,\
    AdminDashboardModule,\
  ],\
\})\
export class AppModule \{\}\
}