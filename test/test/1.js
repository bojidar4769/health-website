function PCStore(input) {
  const proccessor = Number(input[0]);
  const videoCard = Number(input[1]);
  const RAM = Number(input[2]);
  const RAMCount = Number(input[3]);
  const discount = Number(input[4]);

  const discountedProccessor = proccessor - proccessor * discount;
  const discountedVideoCard = videoCard - videoCard * discount;
  const priceInLevas =
    discountedProccessor + discountedVideoCard + RAM * RAMCount;

  console.log(`Money needed - ${(priceInLevas * 1.57).toFixed(2)} leva.`);
}
