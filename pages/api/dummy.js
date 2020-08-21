// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res.statusCode = 200;
      res.json({ result: 1, message: 'Successful response' });
      resolve();
    }, Math.floor(Math.random()*1000+250))
  });
}
