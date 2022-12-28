import YAML from 'yamljs';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';

export function getS3Config(format = 'object') {

  const region = 'us-west-2';

  const Bucket = 'dominion-config';
  const Key = `${process.env.NODE_ENV}.yml`;
  const s3 = new S3Client({region});

  const getObject = new GetObjectCommand({Bucket, Key})

  return s3.send(getObject).then((yamlBuffer) => {

    const yamlConfig = new Buffer(yamlBuffer.Body as any).toString('utf8');

    switch (format) {

      default:
      case 'yaml':
        return yamlConfig;

      case 'object':
        return YAML.parse(yamlConfig);

      case 'json':
        return JSON.stringify(YAML.parse(yamlConfig));

    }
  });


}
