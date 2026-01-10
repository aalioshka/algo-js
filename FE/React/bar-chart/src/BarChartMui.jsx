import { Box, Tooltip, Typography } from '@mui/material';
import { yellow } from '@mui/material/colors';

const data = [
  { label: 'Jan', value: 40 },
  { label: 'Feb', value: 30 },
  { label: 'Mar', value: 50 },
  { label: 'Apr', value: 20 },
  { label: 'May', value: 35 },
];

const BarChartMui = () => {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <Box
      sx={{
        width: '100%',
        height: 300,
        display: 'flex',
        alignItems: 'flex-end',
        gap: 2,
        px: 2,
        backgroundColor: 'yellow',
        borderRadius: 2,
      }}
    >
      {data.map(item => {
        const barHeight = (item.value / maxValue) * 100;

        return (
          <Box
            key={item.label}
            sx={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Tooltip title={item.value} arrow>
              <Box
                sx={{
                  width: '100%',
                  height: `${barHeight}%`,
                  backgroundColor: 'primary.main',
                  borderRadius: '6px 6px 0 0',
                  transition: 'height 0.4s ease',
                  cursor: 'pointer',
                }}
              />
            </Tooltip>

            <Typography variant="caption" mt={1}>
              {item.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default BarChartMui;
