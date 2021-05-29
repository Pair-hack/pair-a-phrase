import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menuPaper: {
    maxHeight: 150
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [language, setLanguage] = React.useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          onChange={handleChange}
          MenuProps={{ classes: { paper: classes.menuPaper } }}
        >
          <MenuItem value={'af'}>Afrikaans</MenuItem>
          <MenuItem value={'sq'}>Albanian</MenuItem>
          <MenuItem value={'am'}>Amharic</MenuItem>
          <MenuItem value={'ar'}>Arabic</MenuItem>
          <MenuItem value={'hy'}>Armenian</MenuItem>
          <MenuItem value={'as'}>Assamese</MenuItem>
          <MenuItem value={'az'}>Azerbaijani</MenuItem>
          <MenuItem value={'bn'}>Bangla</MenuItem>
          <MenuItem value={'bs'}>Bosnian (Latin)</MenuItem>
          <MenuItem value={'bg'}>Bulgarian</MenuItem>
          <MenuItem value={'yue'}>Cantonese (Traditional)</MenuItem>
          <MenuItem value={'ca'}>Catalan</MenuItem>
          <MenuItem value={'zh-Hans'}>Chinese Simplified</MenuItem>
          <MenuItem value={'zh-Hant'}>Chinese Traditional</MenuItem>
          <MenuItem value={'hr'}>Croatian</MenuItem>
          <MenuItem value={'cs'}>Czech</MenuItem>
          <MenuItem value={'da'}>Danish</MenuItem>
          <MenuItem value={'prs'}>Dari</MenuItem>
          <MenuItem value={'nl'}>Dutch</MenuItem>
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'et'}>Estonian</MenuItem>
          <MenuItem value={'fj'}>Fijian</MenuItem>
          <MenuItem value={'fil'}>Filipino</MenuItem>
          <MenuItem value={'fi'}>Finnish</MenuItem>
          <MenuItem value={'fr'}>French</MenuItem>
          <MenuItem value={'fr-ca'}>French (Canada)</MenuItem>
          <MenuItem value={'de'}>German</MenuItem>
          <MenuItem value={'el'}>Greek</MenuItem>
          <MenuItem value={'gu'}>Gujarati</MenuItem>
          <MenuItem value={'ht'}>Haitian Creole</MenuItem>
          <MenuItem value={'he'}>Hebrew</MenuItem>
          <MenuItem value={'hi'}>Hindi</MenuItem>
          <MenuItem value={'mww'}>Hmong Daw</MenuItem>
          <MenuItem value={'hu'}>Hungarian</MenuItem>
          <MenuItem value={'is'}>Icelandic</MenuItem>
          <MenuItem value={'id'}>Indonesian</MenuItem>
          <MenuItem value={'iu'}>Inuktitut</MenuItem>
          <MenuItem value={'ga'}>Irish</MenuItem>
          <MenuItem value={'it'}>Italian</MenuItem>
          <MenuItem value={'ja'}>Japanese</MenuItem>
          <MenuItem value={'kn'}>Kannada</MenuItem>
          <MenuItem value={'kk'}>Kazakh</MenuItem>
          <MenuItem value={'km'}>Khmer</MenuItem>
          <MenuItem value={'tlh-Latn'}>Klingon</MenuItem>
          <MenuItem value={'tlh-Piqd'}>Klingon (plqaD)</MenuItem>
          <MenuItem value={'ko'}>Korean</MenuItem>
          <MenuItem value={'ku'}>Kurdish (Central)</MenuItem>
          <MenuItem value={'kmr'}>Kurdish (Northern)</MenuItem>
          <MenuItem value={'lo'}>Lao</MenuItem>
          <MenuItem value={'lv'}>Latvian</MenuItem>
          <MenuItem value={'lt'}>Lithuanian</MenuItem>
          <MenuItem value={'mg'}>Malagasy</MenuItem>
          <MenuItem value={'ms'}>Malay</MenuItem>
          <MenuItem value={'ml'}>Malayalam</MenuItem>
          <MenuItem value={'mt'}>Maltese</MenuItem>
          <MenuItem value={'mi'}>Maori</MenuItem>
          <MenuItem value={'mr'}>Marathi</MenuItem>
          <MenuItem value={'my'}>Myanmar</MenuItem>
          <MenuItem value={'ne'}>Nepali</MenuItem>
          <MenuItem value={'nb'}>Norwegian</MenuItem>
          <MenuItem value={'or'}>Odia</MenuItem>
          <MenuItem value={'ps'}>Pashto</MenuItem>
          <MenuItem value={'fa'}>Persian</MenuItem>
          <MenuItem value={'pl'}>Polish</MenuItem>
          <MenuItem value={'pt'}>Portuguese (Brazil)</MenuItem>
          <MenuItem value={'pt-pt'}>Portuguese (Portugal)</MenuItem>
          <MenuItem value={'pa'}>Punjabi</MenuItem>
          <MenuItem value={'otq'}>Queretaro Otomi</MenuItem>
          <MenuItem value={'ro'}>Romanian</MenuItem>
          <MenuItem value={'ru'}>Russian</MenuItem>
          <MenuItem value={'sm'}>Samoan</MenuItem>
          <MenuItem value={'sr-Cyrl'}>Serbian (Cyrillic)</MenuItem>
          <MenuItem value={'sr-Latn'}>Serbian (Latin)</MenuItem>
          <MenuItem value={'sk'}>Slovak</MenuItem>
          <MenuItem value={'sl'}>Slovenian</MenuItem>
          <MenuItem value={'es'}>Spanish</MenuItem>
          <MenuItem value={'sw'}>Swahili</MenuItem>
          <MenuItem value={'sv'}>Swedish</MenuItem>
          <MenuItem value={'ty'}>Tahitian</MenuItem>
          <MenuItem value={'ta'}>Tamil</MenuItem>
          <MenuItem value={'te'}>Telugu</MenuItem>
          <MenuItem value={'th'}>Thai</MenuItem>
          <MenuItem value={'ti'}>Tigrinya</MenuItem>
          <MenuItem value={'to'}>Tongan</MenuItem>
          <MenuItem value={'tr'}>Turkish</MenuItem>
          <MenuItem value={'uk'}>Ukrainian</MenuItem>
          <MenuItem value={'ur'}>Urdu</MenuItem>
          <MenuItem value={'vi'}>Vietnamese</MenuItem>
          <MenuItem value={'cy'}>Welsh</MenuItem>
          <MenuItem value={'yua'}>Yucatec Maya</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}