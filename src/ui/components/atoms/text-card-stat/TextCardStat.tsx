import { Card, CardContent, Typography, Box, Avatar, Checkbox } from '@mui/material';
import type { TextCardStatProps } from './types/IProps';

function TextCardStat({
  badgeText,
  badgeColor,
  badgeNumber = 0,
  badgeAvatarUrl,
  title,
  content,
}: TextCardStatProps) {
  return (
    <Card sx={{ borderRadius: 4, padding: 2, maxWidth: 500 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Checkbox
          disableRipple
          icon={
            <Box sx={{ width: 17, height: 17, border: '2px solid black', borderRadius: '4px' }} />
          }
          checkedIcon={
            <Box sx={{ width: 20, height: 20, backgroundColor: 'black', borderRadius: '4px' }} />
          }
          sx={{ paddingRight: 1.5, paddingLeft: 0 }}
        />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: badgeColor,
            borderRadius: '10px',
            padding: '4px 6px',
            fontFamily: 'Poppins, DM Sans, sans-serif',
          }}
        >
          {badgeAvatarUrl && (
            <Avatar
              alt="Avatar"
              src={badgeAvatarUrl}
              sx={{ width: 24, height: 24, borderRadius: '6px', marginRight: 1 }}
              variant="rounded"
            />
          )}
          <Typography
            sx={{
              color: 'white',
              fontWeight: 'normal',
              fontSize: '14px',
              marginRight: 1,
              fontFamily: 'Poppins, DM Sans, sans-serif',
            }}
          >
            {badgeText}
          </Typography>
          <Box
            sx={{
              backgroundColor: 'white',
              color: badgeColor,
              borderRadius: '4px',
              padding: '4px 10px',
              fontSize: '12px',
              fontWeight: 600,
              lineHeight: 1,
              textAlign: 'center',
              fontFamily: 'Poppins, DM Sans, sans-serif',
            }}
          >
            {badgeNumber}
          </Box>
        </Box>
      </Box>

      <CardContent sx={{ paddingTop: 0, paddingLeft: '42px' }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontFamily: 'Poppins, DM Sans, sans-serif', fontWeight: 600 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontFamily: 'Poppins, DM Sans, sans-serif' }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TextCardStat;
