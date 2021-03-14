const getExchange = async (from, to, fromAmount) => {
  const url = `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${from}/${to}/${fromAmount}?format=json`;

  // console.log(url);
  let res = await fetch(url);

  let data = await res.json();

  const rate = data.CustomerRate;
  const toAmount = data.CustomerAmount;

  const b = {
    rate: rate,
    toAmount: toAmount,
  };

  return b;
};

export default getExchange;
