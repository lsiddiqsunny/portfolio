import axios from 'axios';

export function fetchUserDetail(cb) {
  const url = 'https://codeforces.com/api/user.info?handles=lsiddiqsunny';
  axios.get(url).then(res => {
    cb(res);
  }).catch(err => {
    console.log('error: ', err);
  })
};

export function fetchRating(cb) {
  const url = 'https://codeforces.com/api/user.rating?handle=lsiddiqsunny';

  axios.get(url).then(res => {
    cb(res);
  }).catch(err => {
    console.log('error: ', err);
  })
}

export function fetchGitStatus(url, cb) {
  axios.get(url).then(res => {
    cb(res);
  }).catch(err => {
    console.log('error from git', err)
  })
}