import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import * as moment from 'moment';

@Controller('images')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getImagesByDate(@Query('date') date: string) {
    const validDate = moment(date, 'YYYY-MM-DD', true).isValid();
    if (!validDate) {
      throw new HttpException(
        'Date Format must be in "YYYY-MM-DD" format',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    } else {
      return this.appService.getImagesByDate(date);
    }
  }
}
