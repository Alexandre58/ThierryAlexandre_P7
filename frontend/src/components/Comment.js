import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Comment() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
   
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Béatrice Dupont</Typography>
          <Typography className={classes.secondaryHeading}>
            votre commentaire
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet. At nobis omnis est nihil galisum quo ipsa nulla ut sequi dolores et sint iure quo accusantium voluptatem sed maxime voluptas. 33 accusamus esse aut deserunt quae et officiis sint rem nesciunt eaque eos incidunt enim ab voluptatem consequatur est commodi iure. Sed sint debitis qui voluptas modi aut perferendis omnis! Ut temporibus quaerat aut officiis voluptas et veniam.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
 
    </div>
  );
}