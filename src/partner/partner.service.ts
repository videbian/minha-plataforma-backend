{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Injectable, NotFoundException \} from '@nestjs/common';\
import \{ InjectRepository \} from '@nestjs/typeorm';\
import \{ Repository \} from 'typeorm';\
import \{ Partner \} from './entities/partner.entity';\
import \{ CreatePartnerDto \} from './dto/create-partner.dto';\
import \{ UpdatePartnerDto \} from './dto/update-partner.dto';\
\
@Injectable()\
export class PartnerService \{\
  constructor(\
    @InjectRepository(Partner)\
    private partnerRepository: Repository<Partner>,\
  ) \{\}\
\
  async create(createPartnerDto: CreatePartnerDto): Promise<Partner> \{\
    const partner = this.partnerRepository.create(createPartnerDto);\
    return await this.partnerRepository.save(partner);\
  \}\
\
  async findAll(): Promise<Partner[]> \{\
    return await this.partnerRepository.find();\
  \}\
\
  async findOne(id: number): Promise<Partner> \{\
    const partner = await this.partnerRepository.findOne(\{ where: \{ id \} \});\
    if (!partner) \{\
      throw new NotFoundException(`Partner with ID $\{id\} not found`);\
    \}\
    return partner;\
  \}\
\
  async findByEmail(email: string): Promise<Partner | null> \{\
    return await this.partnerRepository.findOne(\{ where: \{ email \} \});\
  \}\
\
  async update(id: number, updatePartnerDto: UpdatePartnerDto): Promise<Partner> \{\
    const partner = await this.findOne(id);\
    Object.assign(partner, updatePartnerDto);\
    return await this.partnerRepository.save(partner);\
  \}\
\
  async remove(id: number): Promise<void> \{\
    const partner = await this.findOne(id);\
    await this.partnerRepository.remove(partner);\
  \}\
\
  async getActivePartners(): Promise<Partner[]> \{\
    return await this.partnerRepository.find(\{ where: \{ status: 'active' \} \});\
  \}\
\
  async getTotalPartnersCount(): Promise<number> \{\
    return await this.partnerRepository.count();\
  \}\
\
  async getActivePartnersCount(): Promise<number> \{\
    return await this.partnerRepository.count(\{ where: \{ status: 'active' \} \});\
  \}\
\}\
}