import { Question } from '../types/quiz';
import { aljabarBilanganQuestions } from './domainQuestions/aljabarBilangan';
import { pemodelanLinearQuestions } from './domainQuestions/pemodelanLinear';
import { barisanEksponensialQuestions } from './domainQuestions/barisanEksponensial';
import { geometriBidangQuestions } from './domainQuestions/geometriBidang';
import { geometriRuangQuestions } from './domainQuestions/geometriRuang';
import { transformasiGeometriQuestions } from './domainQuestions/transformasiGeometri';
import { trigonometriQuestions } from './domainQuestions/trigonometri';
import { statistikaPeluangQuestions } from './domainQuestions/statistikaPeluang';
import { kecukupanDataQuestions } from './domainQuestions/kecukupanData';

/**
 * Bank Data Soal Matematika (Non-Lanjut) TKA SMA 2025
 * Total: 54 Butir Soal Terstandarisasi yang Dipisahkan Berdasarkan 9 Domain Materi
 */
export const questionsData: Question[] = [
  ...aljabarBilanganQuestions,
  ...pemodelanLinearQuestions,
  ...barisanEksponensialQuestions,
  ...geometriBidangQuestions,
  ...geometriRuangQuestions,
  ...transformasiGeometriQuestions,
  ...trigonometriQuestions,
  ...statistikaPeluangQuestions,
  ...kecukupanDataQuestions,
];
