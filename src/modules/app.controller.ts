import { Controller, Get } from '@nestjs/common';
import * as rp from 'request-promise-native';


export interface ReportInfo {
  clani: string[];
  opis_projekta: string;
  mikrostoritve: string[];
  github: string[];
  travis: string[];
  dockerhub: string[];
}

const seminarReportInfo: ReportInfo = {
  'clani'        : ['tt5157'],
  'opis_projekta': 'Projekt implementira aplikacijo sestavljeno iz več mikrostoritev za zbiranje podatkov iz več virov med drugimi tudi twitter (mini spletni pajek). Za beleženje se uporablja custom ELK stack dosegljiv na http://log.tomakic.com/elk/app/kiban',
  'mikrostoritve': [
    'http://35.198.168.200:3000/job', 'http://35.198.100.92:3000', 'http://35.198.176.199:3000/twitter'],
  'github'       : [
    'https://github.com/NestJsPlayground/JobMicroService', 'https://github.com/TilenTomakic/nestjs-seed', 'https://github.com/NestJsPlayground/TwitterMicroService'],
  'travis'       : [
    'https://travis-ci.org/NestJsPlayground/JobMicroService', 'https://travis-ci.org/TilenTomakic/nestjs-seed', 'https://travis-ci.org/NestJsPlayground/TwitterMicroService'],
  'dockerhub'    : [
    'https://hub.docker.com/r/tilen/demo-svc-job/', 'https://hub.docker.com/r/tilen/nestjs-seed/', 'https://hub.docker.com/r/tilen/demo-svc-twitter/']
};

@Controller()
export class AppController {
	@Get()
	async root() {
	  let jobsFound;
	  try {
      jobsFound = await rp({uri: 'http://apijob:3000/job', json: true});
      jobsFound = jobsFound.length;
    } catch (e) {
      jobsFound = e.message;
    }

    return { doc: '/api', jobsFound };
  }

  @Get('v1/demo/info')
  info() {
    return seminarReportInfo;
  }
}
