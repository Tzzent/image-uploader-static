import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Progress.css';

function LinearProgressWithLabel(props) {

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(props.value,)}%`}</Typography>
      </Box>
    </Box>
  );
}


export default function LinearWithValueLabel({ setWay, progress, setProgress }) {

  if (progress == 100) {
    setTimeout(() => {
      setWay(3)
      setProgress(0)
    }, 1200)
  }

  return (
    <div className='container__progress'>
      <h3>Uploading...</h3>
      <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel value={progress} />
      </Box>
    </div>
  );
}
