import react from 'react';
import { Card, CardContent, Typography, Chip } from '@mui/material';
import { TextCardStatProps } from './types/IProps';

const TextCardStat: React.FC<TextCardStatProps> = ({ badgeText, badgeColor, title, content }) => {
  return (
    <Card sx={{ borderRadius: 4, padding: 2, maxWidth: 400 }}>
      <Chip label={badgeText} sx={{ backgroundColor: badgeColor, color: 'white', mb: 1 }} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TextCardStat;
