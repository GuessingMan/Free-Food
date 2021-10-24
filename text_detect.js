const vision = require('@google-cloud/vision');
const csv = require('csvtojson');

const twitter = require('twitter-lite');

newClient = function (subdomain = 'api') {
	return new twitter({
		subdomain,
		consumer_key: 'M886S36834DlBRXugdiN9YpY5',
		consumer_secret: 'o02FLjU77jF9x47ECHNpT1YMi8Vmhfpu7duxWvPMkUd9VHVdda',
		access_token_key: '1452020424594759683-EUOoflDZtQw3t8wtuRqS7IN6Z99Tth',
		access_token_secret: 'QkvSnxYwg6kVUt6NktQiK4EyNKlpZnJQ0dpUgwb7G5NuP'
	});
}

const apiClient = newClient();
const uploadClient = newClient('upload');

class TextDetector {
	static async detectText(filename, foodFile) {
		const client = new vision.ImageAnnotatorClient({
			keyFilename: 'keyfile.json'
		});

		const bucketName = 'potential-flyers';
		const fileName = filename;

		const [result] = await client.textDetection(`gs://${bucketName}/${fileName}`);
		const detections = result.textAnnotations;


		//console.log('Text:');
		//detections.forEach(text => console.log(text.description));
		csv().fromFile(foodFile).then((json) => {
			//console.log(JSON.stringify(detections).includes(JSON.stringify(json)))
			detections.forEach(function(text) { 
				if (JSON.stringify(json).includes(text.description)) {
					uploadClient.post('media/upload', { media_data: base64image })
						.then(media => {
							console.log('Tweeted image');
						}).catch(console.error);
				}
				console.log(`${text.description}: ${JSON.stringify(json).includes(text.description)}`)
			})
		})
	}

}

TextDetector.detectText('beer.png', 'food-related.csv');


