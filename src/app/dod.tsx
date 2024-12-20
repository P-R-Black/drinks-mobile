import { View, Text } from 'react-native'
import React from 'react'
import DrinkOfTheDay from '@/components/DrinkOfTheDay'

const Dod = () => {
    return (
        <View>
            <DrinkOfTheDay drink={{
                id: undefined,
                results: {
                    map: function (arg0: (ba: any) => any): unknown {
                        throw new Error('Function not implemented.')
                    },
                    id: 0,
                    drink_name: '',
                    slug: '',
                    profile: '',
                    base_alcohol: [],
                    ingredients: [],
                    garnish: [],
                    serving_glass: '',
                    mixing_direction: '',
                    drink_type: '',
                    must_know_drink: false
                }
            }} />
        </View>
    )
}

export default Dod