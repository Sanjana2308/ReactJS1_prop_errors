const headingStyle = {
    fontSize : '4em'
};

const bodyStyle = {
    fontSize : '2.5em'
}

const textCenter = {
    textAlign: 'center' as const
};

const listUnStyled = {
    listStyleType : 'none',
    padding : 0,
    margine : 0
};

const headingFinalStyle = {
    ...headingStyle,
    ...textCenter
}

export{
    headingStyle,
    bodyStyle,
    textCenter,
    listUnStyled,
    headingFinalStyle
}