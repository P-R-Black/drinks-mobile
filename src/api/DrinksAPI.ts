import { useState } from 'react';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AlcoholSelectProps } from '@/types';

// const drinksApi = process.env.REACT_APP_PRODUCTION_DRINK_PUBLIC_KEY
const cocktailBaseAlcohol = process.env.REACT_APP_PUBLIC_BASE_ALCOHOL || ""
const drinksAPIKeyDev = process.env.EXPO_PUBLIC_APP_PRODUCTION_KEY || ""


export const FetchAlcoholTypes = async () => {
    try {
        const response = await axios.get('https://www.drinksapi.paulrblack.com/api/v1/', {
            headers: {
                'Authorization': `Api-Key ${drinksAPIKeyDev}`,
                'Content-Type': 'application/json',
            },
        });

        // Handle the successful response
        return response.data;

    } catch (error) {
        // Handle any errors
        if (axios.isAxiosError(error)) {
            console.error('Error fetching alcohol types:', error.message);
            if (error.response) {
                console.error('Server error:', error.response.status, error.response.data);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error:', error.message);
            }
        } else {
            console.error('Unexpected error:', error);
        }
    }
};

const headers = {
    'Authorization': `Api-Key ${drinksAPIKeyDev}`,
    'Content-type': 'application/json',
}

const AxiosFetch = async (endpoint: string) => {

    const response = await axios.get('https://www.drinksapi.paulrblack.com/api/v1/' + endpoint, {
        headers: {
            'Authorization': `Api-Key ${drinksAPIKeyDev}`,
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};



export const AllAlcoholType = () => {
    return useQuery({
        queryKey: ['alcoholTypes'], // Unique query key
        queryFn: async () => AxiosFetch('all-alcohol-types'),
        // queryFn: AxiosFetch('alcohol-types'), // Function to fetch the data
        staleTime: 60000, // Cache data for 1 minute (optional, can adjust)
        // cacheTime: 5 * 60 * 1000, // Keep the cache for 5 minutes (optional)
    });
}

export const CocktailAlcoholType = () => {
    return useQuery({
        queryKey: ['cocktailAlcoholTypes'], // Unique query key
        queryFn: async () => AxiosFetch('cocktail-alcohol-types'),
        // queryFn: AxiosFetch('alcohol-types'), // Function to fetch the data
        staleTime: 60000, // Cache data for 1 minute (optional, can adjust)
        // cacheTime: 5 * 60 * 1000, // Keep the cache for 5 minutes (optional)
    });
}



export const ShotsAlcoholType = () => {
    return useQuery({
        queryKey: ['shotAlcoholTypes'], // Unique query key
        queryFn: async () => AxiosFetch('shot-alcohol-types'),
        // queryFn: AxiosFetch('alcohol-types'), // Function to fetch the data
        staleTime: 60000, // Cache data for 1 minute (optional, can adjust)
        // cacheTime: 5 * 60 * 1000, // Keep the cache for 5 minutes (optional)
    });
}

export const CocktailsByBaseDrinkApi = (alcoholBase: string) => {
    return useQuery({
        queryKey: ['cocktailByBase', alcoholBase], // Unique query key
        queryFn: async () => AxiosFetch('cocktail/' + alcoholBase),
        refetchOnWindowFocus: true, // Automatically refetch when window is focused
        refetchOnMount: true, // Automatically refetch when component remounts
        // staleTime: 60000, // Cache data for 1 minute (optional, can adjust)
        // cacheTime: 5 * 60 * 1000, // Keep the cache for 5 minutes (optional)
    });
}


export const ShotsByBaseDrinkApi = (shotBase: string) => {
    return useQuery({
        queryKey: ['shotsByBase', shotBase], // Unique query key
        queryFn: async () => AxiosFetch('shot/' + shotBase),
        refetchOnWindowFocus: true, // Automatically refetch when window is focused
        refetchOnMount: true, // Automatically refetch when component remounts
        // staleTime: 60000, // Cache data for 1 minute (optional, can adjust)
        // cacheTime: 5 * 60 * 1000, // Keep the cache for 5 minutes (optional)
    });
}


export const MustKnowDrinkApi = () => {
    return useQuery({
        queryKey: ['mustKnows'], // Unique query key
        queryFn: async () => AxiosFetch('must-knows'),
        refetchOnWindowFocus: true, // Automatically refetch when window is focused
        refetchOnMount: true, // Automatically refetch when component remounts
        // staleTime: 60000, // Cache data for 1 minute (optional, can adjust)
        // cacheTime: 5 * 60 * 1000, // Keep the cache for 5 minutes (optional)
    });
}

export const AllDrinksApi = () => {
    return useQuery({
        queryKey: ['allDrinks'], // Unique query key
        queryFn: async () => AxiosFetch('drinks'),
        refetchOnWindowFocus: true, // Automatically refetch when window is focused
        refetchOnMount: true, // Automatically refetch when component remounts
        // staleTime: 60000, // Cache data for 1 minute (optional, can adjust)
        // cacheTime: 5 * 60 * 1000, // Keep the cache for 5 minutes (optional)
    });
}