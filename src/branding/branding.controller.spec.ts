{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Test, TestingModule \} from '@nestjs/testing';\
import \{ BrandingController \} from './branding.controller';\
import \{ BrandingService \} from './branding.service';\
\
describe('BrandingController', () => \{\
  let controller: BrandingController;\
  let service: BrandingService;\
\
  const mockBrandingService = \{\
    getBrandingConfig: jest.fn(),\
    updateBrandingConfig: jest.fn(),\
    generateQRCode: jest.fn(),\
    generateShareableLink: jest.fn(),\
  \};\
\
  beforeEach(async () => \{\
    const module: TestingModule = await Test.createTestingModule(\{\
      controllers: [BrandingController],\
      providers: [\
        \{\
          provide: BrandingService,\
          useValue: mockBrandingService,\
        \},\
      ],\
    \}).compile();\
\
    controller = module.get<BrandingController>(BrandingController);\
    service = module.get<BrandingService>(BrandingService);\
  \});\
\
  it('should be defined', () => \{\
    expect(controller).toBeDefined();\
  \});\
\});\
}