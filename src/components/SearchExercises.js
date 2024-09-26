import React, { useEffect, useState } from "react"; // Importing necessary hooks from React
import { Box, Button, Stack, TextField, Typography } from "@mui/material"; // Importing Material UI components

import { exerciseOptions, fetchData } from "../utils/fetchData"; // Importing utility functions for API requests
import HorizontalScrollbar from "../components/HorizontalScrollbar";

const SearchExercises = () => {
  const [Search, setSearch] = useState('');
  const [exercises, setExercises] =useState([])
  ;
  const [bodyParts, setBodyPart] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyPart(['all', ...bodyPartData]);
    }

    fetchExercisesData();
  }, [])

  // Function to handle the search action
  const handleSearch = async () => {
    if (Search) {
      // Check if the Search state is not empty
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      ); // Fetch exercise data from API

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().include(Search)
        || exercise.target.toLowerCase().includes(Search)
        || exercise.equipment.toLowerCase().includes(Search)
        || exercise.bodyPart.toLowerCase().includes(Search)
      );

      setSearch('');
      setExercises(searchedExercises);

    } 
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={Search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())} // Updates the Search state when the input changes
          placeholder="Search Exercises" // Placeholder text in the input field
          type="text"
        />
        <Button
          className="Search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch} // On click, trigger the handleSearch function
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyParts} setBodyPart=
          {setBodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises; // Exporting the component for use in other parts of the application
