export const pluck = <T,U>(array: T[], field: string): U[] => {
    return array.map(value => value[field]);
}

export const test = (): void => {
    console.log("test method")
};