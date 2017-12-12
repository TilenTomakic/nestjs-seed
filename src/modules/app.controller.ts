import { Get, Controller } from '@nestjs/common';
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
  "clani": ["tt5157"],
  "opis_projekta": "Projekt implementira aplikacijo sestavljeno iz več mikrostoritev za zbiranje povezav iz več virov med drugimi tudi twitter (spletni pajek, ki zbira samo povezave ne besedila). Za beleženje se uporablja custom ELK stack dosegljiv na http://log.tomakic.com/elk/app/kiban",
  "mikrostoritve": ["35.198.182.182:3000/api", "http://35.198.182.197:3000/api"],
  "github": ["https://github.com/NestJsPlayground/JobMicroService", "https://github.com/TilenTomakic/nestjs-seed"],
  "travis": ["https://travis-ci.org/NestJsPlayground/JobMicroService", "https://travis-ci.org/TilenTomakic/nestjs-seed"],
  "dockerhub": ["https://hub.docker.com/r/tilen/demo-svc-job/", "https://hub.docker.com/r/tilen/nestjs-seed/"]
};

@Controller()
export class AppController {
	@Get()
	async root() {
	  let jobsFound;
	  try {
      jobsFound = await rp({uri: 'http://jobapi:3000/job'});
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
