{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Controller, Get, Patch, Param, Body, Post \} from '@nestjs/common';\
import \{ BrandingService \} from './branding.service';\
\
@Controller('branding')\
export class BrandingController \{\
  constructor(private readonly brandingService: BrandingService) \{\}\
\
  @Get(':partnerId')\
  getBrandingConfig(@Param('partnerId') partnerId: string) \{\
    return this.brandingService.getBrandingConfig(+partnerId);\
  \}\
\
  @Patch(':partnerId')\
  updateBrandingConfig(\
    @Param('partnerId') partnerId: string,\
    @Body() brandingConfig: any,\
  ) \{\
    return this.brandingService.updateBrandingConfig(+partnerId, brandingConfig);\
  \}\
\
  @Post(':partnerId/qr-code')\
  generateQRCode(\
    @Param('partnerId') partnerId: string,\
    @Body() body: \{ data: string \},\
  ) \{\
    return this.brandingService.generateQRCode(+partnerId, body.data);\
  \}\
\
  @Post(':partnerId/shareable-link')\
  generateShareableLink(\
    @Param('partnerId') partnerId: string,\
    @Body() body: \{ type?: string \},\
  ) \{\
    return this.brandingService.generateShareableLink(+partnerId, body.type);\
  \}\
\}\
}