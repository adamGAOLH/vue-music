import jsonp from 'common/js/jsonp';
import {
  commonParameters,
  options
} from './config';
// import axios from 'axios';
export function getRecommnend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

  // Object.assign():用于合并/复制对象的属性
  const data = Object.assign({}, commonParameters, {
    plateform: 'h5',
    uin: 0,
    needNewCode: 1
  });
  return jsonp(url, data, options);
}

// export function getDiscList() {
//   const url = '/api/getDiscList';
//   const data = Object.assign({}, commonParameters, {
//     platform: 'yqq',
//     hostUin: 0,
//     sin: 0,
//     ein: 29,
//     sortId: 5,
//     needNewCode: 0,
//     categoryId: 10000000,
//     rnd: Math.random(),
//     format: 'json'
//   });
//
//   return axios.get(url, {
//     params: data
//   }).then((res) => {
//     return Promise.resolve(res.data);
//   });
// }
export function getDiscList() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';

  const data = Object.assign({}, commonParameters, {
    picmid: 1,
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    loginUin: 0
  });
  return jsonp(url, data, options);
}
