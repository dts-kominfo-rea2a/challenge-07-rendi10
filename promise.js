const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {

  try{
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();

    const combine = [...theaterIXX, ...theaterVGC];

    let marah = combine.filter((item) => item.hasil === 'marah');
    let tidakMarah = combine.filter((item) => item.hasil === 'tidak marah');

    return new Promise((resolve, reject) => {
      if (emosi === 'marah') {
        return resolve(marah.length);
      }
      if (emosi === 'tidak marah') {
        return resolve(tidakMarah.length);
      }
    });
  } catch (rejectMessage) {
    console.log(rejectMessage);
  }
};

module.exports = {
  promiseOutput,
};
