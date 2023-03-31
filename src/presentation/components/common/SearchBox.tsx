import { GeoCoding } from '@/domain/models/geocodingLocation/Geocoding'
import useSearchLocation from '@/presentation/hooks/useSearchLocation'
import { LocationCity } from '@mui/icons-material'
import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material'

const SearchBox = () => {
  const {
    search,
    setSearch,
    inputValue,
    setInputValue,
    setSuggestion,
    suggestion,
  } = useSearchLocation()

  return (
    <Autocomplete
      id='search-box'
      filterOptions={(options) => options}
      options={suggestion}
      getOptionLabel={(option) =>
        typeof option === 'string' ? option : option.place_name
      }
      autoComplete
      includeInputInList
      value={search}
      renderInput={(params) => (
        <TextField {...params} label='where to?' fullWidth />
      )}
      onChange={(event: any, newValue: GeoCoding | null) => {
        setSuggestion(newValue ? [newValue] : suggestion)
        setSearch(newValue)
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
      }}
      renderOption={(props, option) => {
        const parts = option.place_name.split(
          new RegExp(`(${inputValue})', 'gi`)
        )

        const content = parts.map((part, index) => (
          <li {...props} key={index}>
            <Grid container alignItems='center'>
              <Grid item sx={{ display: 'flex', width: 44 }}>
                <LocationCity sx={{ color: 'text.secondary' }} />
              </Grid>
              <Grid
                item
                sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}
              >
                {parts.map((part, index) => (
                  <Box
                    key={`${part}-${index}`}
                    component='span'
                    sx={{ fontWeight: part ? 'bold' : 'regular' }}
                  >
                    {part}
                  </Box>
                ))}
                <Typography variant='body2' color='text.secondary'>
                  {option.context?.map((item) => `${item.text}`).join(', ')}
                </Typography>
              </Grid>
            </Grid>
          </li>
        ))

        return content

        // <li {...props} key={option.id}>
        //   <Grid container alignItems='center'>
        //     <Grid item sx={{ display: 'flex', width: 44 }}>
        //       <LocationCity sx={{ color: 'text.secondary' }} />
        //     </Grid>
        //     <Grid
        //       item
        //       sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}
        //     >
        //       {parts.map((part, index) => (
        //         <Box
        //           key={`${part}-${index}`}
        //           component='span'
        //           sx={{ fontWeight: part ? 'bold' : 'regular' }}
        //         >
        //           {part}
        //         </Box>
        //       ))}
        //       <Typography variant='body2' color='text.secondary'>
        //         {option.context?.map((item) => `${item.text}`).join(', ')}
        //       </Typography>
        //     </Grid>
        //   </Grid>
        // </li>
      }}
    />
  )
}

export default SearchBox
