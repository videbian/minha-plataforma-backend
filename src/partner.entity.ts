{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn \} from 'typeorm';\
\
@Entity('partners')\
export class Partner \{\
  @PrimaryGeneratedColumn()\
  id: number;\
\
  @Column(\{ unique: true \})\
  email: string;\
\
  @Column()\
  name: string;\
\
  @Column(\{ nullable: true \})\
  company: string;\
\
  @Column(\{ default: 'pending' \})\
  status: string; // pending, active, inactive\
\
  @Column(\{ type: 'json', nullable: true \})\
  brandingConfig: any;\
\
  @Column(\{ nullable: true \})\
  apiKey: string;\
\
  @CreateDateColumn()\
  createdAt: Date;\
\
  @UpdateDateColumn()\
  updatedAt: Date;\
\}\
}