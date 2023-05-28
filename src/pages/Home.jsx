import { useState } from 'react';
import Progress from '../components/progress/Progress';
import MainUpload from '../containers/MainUpload/MainUpload';
import SuccesUpload from '../containers/SuccessUpload/SuccessUpload';

export default function Home() {
  const [way, setWay] = useState(1)
  const [progress, setProgress] = useState(0)
  const [url, setUrl] = useState(null);

  const handleProgress = (e) => {
    setProgress(Math.round((e.loaded * 100) / e.total));
  };

  return (
    <div className='container-home'>
      <div className='content-home'>
        {way == 1
          ? <MainUpload setWay={setWay} handleProgress={handleProgress} setUrl={setUrl} />
          : way == 2
            ? <Progress setWay={setWay} progress={progress} setProgress={setProgress} />
            : way == 3
              ? <SuccesUpload setWay={setWay} url={url} setUrl={setUrl} />
              : null}
      </div>
    </div>
  )
}
