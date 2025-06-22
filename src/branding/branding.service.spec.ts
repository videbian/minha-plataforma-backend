{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Test, TestingModule \} from '@nestjs/testing';\
import \{ BrandingService \} from './branding.service';\
import \{ PartnerService \} from '../partner/partner.service';\
\
describe('BrandingService', () => \{\
  let service: BrandingService;\
  let partnerService: PartnerService;\
\
  const mockPartnerService = \{\
    findOne: jest.fn(),\
    update: jest.fn(),\
  \};\
\
  beforeEach(async () => \{\
    const module: TestingModule = await Test.createTestingModule(\{\
      providers: [\
        BrandingService,\
        \{\
          provide: PartnerService,\
          useValue: mockPartnerService,\
        \},\
      ],\
    \}).compile();\
\
    service = module.get<BrandingService>(BrandingService);\
    partnerService = module.get<PartnerService>(PartnerService);\
  \});\
\
  it('should be defined', () => \{\
    expect(service).toBeDefined();\
  \});\
\
  it('should return default branding config when partner has none', async () => \{\
    mockPartnerService.findOne.mockResolvedValue(\{\
      id: 1,\
      brandingConfig: null,\
    \});\
\
    const result = await service.getBrandingConfig(1);\
    \
    expect(result).toHaveProperty('primaryColor');\
    expect(result).toHaveProperty('welcomeMessage');\
  \});\
\});\
}