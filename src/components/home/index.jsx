import React, { useState, useEffect, useRef } from 'react';
import { firebrowse } from '../../api/firebrowse';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import './Home.css';

const clinicalFeatures = [
    'date',
    'days to death',
    'days to last followup',
    'days to last known alive',
    'ethnicity',
    'histological type',
    'number of lymph nodes',
    'pathologic stage',
    'pathologic M stage',
    'pathologic N stage',
    'pathologic T stage',
    'race',
    'radiation therapy',
    'tcga participant barcode',
    'tool',
    'tumor tissue type',
    'vital status',
    'years to birth',
];

const Home = () => {
    const [tumorTypes, setTumorTypes] = useState([]);
    const [genes, setGenes] = useState([]);
    const [pathways, setPathways] = useState([]);
    const [selectedTumorTypes, setSelectedTumorTypes] = useState([]);
    const [selectedGenesOne, setSelectedGenesOne] = useState([]);
    const [selectedGenesTwo, setSelectedGenesTwo] = useState([]);
    const [selectedClinicalFeatures, setSelectedClinicalFeatures] = useState(
        []
    );
    const [selectedCancerTypes, setSelectedCancerTypes] = useState([]);
    const [selectedPathways, setSelectedPathways] = useState([]);
    useState([]);
    const [loadingGenes, setLoadingGenes] = useState(false);
    const [page, setPage] = useState(0);
    const genesRef = useRef(null);

    const fetchTumorTypes = async () => {
        try {
            const response = await firebrowse.fetchCohorts({});
            const data = response.sort();
            setTumorTypes(data);
            localStorage.setItem('cancerTypeSelectedOptions', data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchGenes = async () => {
        try {
            const response = await axios.get(
                'https://raw.githubusercontent.com/web4bio/webgen/master/main/validGeneList.json'
            );

            const validGeneList = response.data
                .map((geneInfo) => geneInfo.hugoSymbol)
                .slice(page * 20, (page + 1) * 20);

            if (validGeneList.length > 0) {
                setGenes((prevGenes) => [...prevGenes, ...validGeneList]);
                setPage((prevPage) => prevPage + 1);
            } else {
                // No more items to fetch
                setLoadingGenes(false);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoadingGenes(false);
        }
    };

    const fetchPathways = async () => {
        //Note the specification of the 'preselectedGenes' branch name.
        //genePathwaysList.json needs to be uploaded to the branch running on the github.io link
        try {
            const response = await axios.get(
                'https://raw.githubusercontent.com/web4bio/webgen/development/main/genePathwaysList.json'
            );

            const validPathwaysList = Object.entries(response.data).map(
                ([name, list]) => ({ name, list })
            );
            setPathways(validPathwaysList);
            localStorage.setItem('genePathways', validPathwaysList);
        } catch (error) {
            console.error('Error fetching pathways list:', error);
            throw error; // You can handle the error further or rethrow it if needed
        }
    };

    const handleScroll = () => {
        if (
            genesRef.current &&
            genesRef.current.scrollHeight -
                (genesRef.current.scrollTop + genesRef.current.clientHeight) <
                10 &&
            !loadingGenes
        ) {
            setLoadingGenes(true);
        }
    };

    const handleMenuOpen = () => {
        genesRef.current.addEventListener('scroll', handleScroll);
    };

    const handleMenuClose = () => {
        genesRef.current.removeEventListener('scroll', handleScroll);
    };

    useEffect(() => {
        fetchTumorTypes();
        fetchPathways();
    }, []);

    useEffect(() => {
        if (loadingGenes) {
            fetchGenes();
        }
    }, [loadingGenes]);

    const selectGenesOne = (event) => {
        setSelectedGenesOne(event.target.value);
    };

    const selectGenesTwo = (event) => {
        setSelectedGenesTwo(event.target.value);
    };

    const selectClinicalFeatures = (event) => {
        setSelectedClinicalFeatures(event.target.value);
    };

    const selectPathways = (event) => {
        setSelectedPathway(event.target.value);
    };

    return (
        <main className='home'>
            <div className='home-container'>
                <Typography variant='h5'>
                    A tool for exploring data from the Cancer Genome Atlas
                </Typography>
                <Typography variant='body1'>
                    Currently, this tool enables visualization of gene
                    expression (RNA-seq) data from primary solid tumor samples
                    via heatmap and violin plot.
                </Typography>
                <Typography variant='h5'>Customize Your Cohort:</Typography>
                <Typography variant='body1'>
                    {'1) Select tumor type(s)'}
                </Typography>
                <Autocomplete
                    // sx={{ m: 1, width: 500 }}
                    multiple
                    fullWidth
                    onChange={setSelectedTumorTypes}
                    options={tumorTypes}
                    getOptionLabel={(cancerType) =>
                        `${cancerType['cohort']} (${cancerType['description']})`
                    }
                    disableCloseOnSelect
                    renderInput={(params) => (
                        <TextField {...params} label='Tumor Type(s)' />
                    )}
                    renderOption={(props, option, { selected }) => (
                        <MenuItem
                            {...props}
                            key={option['cohort']}
                            value={option['cohort']}
                            sx={{ justifyContent: 'space-between' }}
                        >
                            {`${option['cohort']} (${option['description']})`}
                            {selected ? <CheckIcon color='info' /> : null}
                        </MenuItem>
                    )}
                />
                <Typography variant='body1'>
                    {
                        '2) Filter data by gene mutation signature and/or by metadata'
                    }
                </Typography>
                <div class='home-selects-row'>
                    <Autocomplete
                        multiple
                        fullWidth
                        options={genes}
                        getOptionLabel={(gene) => gene}
                        disableCloseOnSelect
                        loading={loadingGenes}
                        onOpen={handleMenuOpen}
                        onClose={handleMenuClose}
                        renderInput={(params) => (
                            <TextField {...params} label='Gene(s)' />
                        )}
                        renderOption={(props, option, { selected }) => (
                            <MenuItem
                                {...props}
                                key={option}
                                value={option}
                                sx={{ justifyContent: 'space-between' }}
                            >
                                {option}
                                {selected ? <CheckIcon color='info' /> : null}
                            </MenuItem>
                        )}
                    />

                    <Autocomplete
                        multiple
                        fullWidth
                        onChange={selectClinicalFeatures}
                        options={clinicalFeatures}
                        getOptionLabel={(clinicalFeature) => clinicalFeature}
                        disableCloseOnSelect
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label='Clinical Feature(s)'
                            />
                        )}
                        renderOption={(props, option, { selected }) => (
                            <MenuItem
                                {...props}
                                key={option}
                                value={option}
                                sx={{ justifyContent: 'space-between' }}
                            >
                                {option}
                                {selected ? <CheckIcon color='info' /> : null}
                            </MenuItem>
                        )}
                    />
                </div>
                <Typography variant='h5'>Explore Your Cohort:</Typography>
                <Typography variant='body1'>
                    {
                        '3) Select genes and/or pathways that you would like to visualize'
                    }
                </Typography>
                <div class='home-selects-row'>
                    <Autocomplete
                        multiple
                        fullWidth
                        onChange={selectGenesTwo}
                        options={genes}
                        getOptionLabel={(gene) => gene}
                        disableCloseOnSelect
                        renderInput={(params) => (
                            <TextField {...params} label='Gene(s)' />
                        )}
                        renderOption={(props, option, { selected }) => (
                            <MenuItem
                                {...props}
                                key={option}
                                value={option}
                                sx={{ justifyContent: 'space-between' }}
                            >
                                {option}
                                {selected ? <CheckIcon color='info' /> : null}
                            </MenuItem>
                        )}
                    />
                    <Autocomplete
                        multiple
                        fullWidth
                        onChange={selectPathways}
                        options={pathways}
                        getOptionLabel={(pathway) => pathway.name}
                        disableCloseOnSelect
                        renderInput={(params) => (
                            <TextField {...params} label='Pathway(s)' />
                        )}
                        renderOption={(props, option, { selected }) => (
                            <MenuItem
                                {...props}
                                key={option.name}
                                value={option.name}
                                sx={{ justifyContent: 'space-between' }}
                            >
                                {option.name}
                                {selected ? <CheckIcon color='info' /> : null}
                            </MenuItem>
                        )}
                    />
                </div>
                <Button sx={{ background: '#4db6ac' }} variant='contained'>
                    Submit
                </Button>
            </div>
        </main>
    );
};

export default Home;
