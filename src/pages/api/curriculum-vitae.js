// // import puppeteer from 'puppeteer';

// const curriculumVitae = async (req, { setHeader, send }) => {
//   setHeader('Content-Disposition', `attachment; filename="cv.pdf"`);
//   setHeader('Content-Type', 'application/pdf');
//   return send('pass here generated pdf file');
// };

// export default curriculumVitae;

export default function curriculumVitae(req, res) {
  res.statusCode = 200;
  res.json({ message: 'Curriculum Vitae' });
}
