export interface StringItem {
    label: string;
    value: any;
}

export const EMPTY_STRING = { label: 'empty-string', value: '' };
export const PADDED = [
    { label: 'one-space', value: ' ' },
    { label: 'two-space', value: '  ' },
    { label: 'three-space', value: '   ' },
    { label: 'four-space', value: '    ' },
    { label: 'five-space', value: '     ' },
];


export const HTML_UNESCAPED_VALID = [
    {
        label: 'example1',
        value: `<html>
                <head>
                    <title></title>
                </head>
                <body>
                    <b><p><div></div></p></b>
                </body>
            </html>`},
    {
        label: 'example2',
        value: `<html>
                <head>
                    <title></title>
                </head>
                <body>
                    <div> <input /> <button></button></div>
                </body>
            </html>`},
    {
        label: 'example3',
        value: `<html>
                <head>
                    <title></title>
                </head>
                <body>
                    <ul><li></li><li></li><li></li></ul>
                </body>
            </html>`},
    {
        label: 'example4',
        value: `<html>
                <head>
                    <title></title>
                </head>
                <body>
                    <div><a /></div>
                </body>
            </html>`}
];

export const HTML_UNESCAPED_INVALID = [
    {
        label: 'example1',
        value: `<html>
                    <head>
                        <title></title>
                    </head>
                    <body>
                        <p><div><div><b></div></p></b>
                    </body>
                </html>`},
    {
        label: 'example2',
        value: `<html>
                <head>
                    <title></title>
                </head>
                <body>
                    <tr><td><td></td></tr>
                </body>
            </html>`},
    {
        label: 'example3',
        value: `<html>
                    <head>
                        <title></title>
                    </head>
                    <body>
                        <div><a></div>
                </html>`},
    {
        label: 'example4',
        value: `<html>
                    <head>
                    <body>
                        <div>
                            <h1><span><li></span></h1>
                    </body>
                </html>`}
];

export const ALPHANUMERIC_10 = {
    label: '10',
    value: 'PXPrpSTs7g'
};
export const ALPHANUMERIC_12 = {
    label: '12',
    value: 'RkAAkf9IMIvP'
};
export const ALPHANUMERIC_15 = {
    label: '15',
    value: 'ZRvOQf2Jr7zw7ZW'
};
export const ALPHANUMERIC_20 = {
    label: '20',
    value: 'lfavHX2qFEV7StV1g3ki'
};
export const ALPHANUMERIC_25 = {
    label: '25',
    value: '7e5cJEczvmSig1N0QIYm81TBB'
};
export const ALPHANUMERIC_30 = {
    label: '30',
    value: 'WinjDkkKKydLFtgjn8tY7TMM4nwJw8'
};
export const ALPHANUMERIC_40 = {
    label: '40',
    value: 'Muf48UlZZJAxiS8C6pHR9KRBm8Lkwf34h5FU1dU5'
};
export const ALPHANUMERIC_50 = {
    label: '50',
    value: 'MGJANgqkS6G7iLPpHkl3lk3bULcg2yvZyQoUfPPxsDYdVO7eHW'
};
export const ALPHANUMERIC_60 = {
    label: '60',
    value: '076F6r6Z0wrRVdFu7Xq9nfCYKdHhB5Du0KrIADLstqCL9mBiGmfYe3KBISaQ'
};
export const ALPHANUMERIC_70 = {
    label: '70',
    value: '2ZPCgcgbGHEnodCReRNiVw7DsN8ME1vvaWCXbDYdFUhELP9QUWE1KnVP0SIU19wIf9Bp7q'
};
export const ALPHANUMERIC_80 = {
    label: '80',
    value: 'soAVmohU7rYdyNYjTaOkXQ1dIxdBMpxIh8kNzjH4BGLfo6PdzoiCtGN0BpgxVD5sVuTmL2UwkA8FSdjs'
};
export const ALPHANUMERIC_90 = {
    label: '90',
    value: 'gz9MRREcJEPfGFYYJbbomebZl43vMJIu4hJE9LpMaJ8jcud0dhmglRJKrVzsf5gSzTSNfqhoiZpajGBfnOGPvv5Tn8'
};
export const ALPHANUMERIC_100 = {
    label: '100',
    value: 'dz2E3xlMz3UDQWkOQG7OEGiId0bWLmHK0Zut559KtvrKK8toIhP9Kyp9Ls9AICuQrbrAoqCfC1JfnEiw8vNjFrfV5XQmC0ktl9h0'
};
export const ALPHANUMERIC_120 = {
    label: '120',
    value: 'BAHMOIbDYF8ieqo0heFwMJeGm2csQ5nCnXEplSao04TPe8Tw5B0tgh7nZzfDiSwGsi984fIgNb5ryw8IEkAMYqHkSnUhYYthFKZhTXAs1sCCk2nPTs8yqLJn'
};
export const ALPHANUMERIC_150 = {
    label: '150',
    value: 'IoBlY5BFoj6GDf8j30ZIgm38WTSK1OBXVksKp9gAulclQNpa16FSl4sW1oIjGoekyETNd4rukg6erGI7G2YdrCGvTRXi555VGCXgtBtwK77FInqD90sRK6Z7nyvimbhO91OHiXvzrhdPGkY7uNnZTZ'
};
export const ALPHANUMERIC_200 = {
    label: '200',
    value: 'dbXfEgiyWbJVWC4tdAD70WDPTdpoM5OkMF0TCBIflSNN4ynrkbMRgI2miVKEyAOnDLCipM3p5q8V0HshFwjppDGTCjBBRTmWKmGE9Qd3vVXiAGJUfmLrFZC3PTENWm1D6xHHV6IJdaVrVIMKJGFtyQYvysEISh4mMzIJx5lLhBg0RljBHVtcD5NMjss5LBdELUQP378P'
};
export const ALPHANUMERIC_400 = {
    label: '400',
    value: 'C7xgaOmpsLgDK2Mz287VAdSfJZRVHY07RxnlP9vyvo5vjNF9zqrrwL4PyndfPpaqGOxmDpbrnAmW23WkDXhOuHDpHqAz2BFyOMXlqyzPT5rl5yzR7Jqh76eLILa9PZy4T0UtgmtbCGgxeGDMhSlBo1kGWs6zRDmyg74mHoIGQtbYymavKqyptmNGyg6iDMPYLk8lym7GLbWBJ4eXN9FvyaR4Sjbz0ijfiE4ZRBQLMnqGvYyzGC5Lr0fUDdOu9rKbjz11uw4PICLgXmZq0Po0OoYpgpgQ1B7HLPuFTp3DU1EjkQ3VWuQiNA6u2ObOntao4Va8GNpShiMt97VVM59LkSC4U742Ox3VrV61cCc4PKIay67vGYylAlOItj8Kh1IGBOoefooU0Mh00Ewt'
};
export const ALPHANUMERIC_1001 = {
    label: '1001',
    value: '0lnzQt2T2fbvC3YAYQP33t1hJW1zYKYbth1fv5MFJzBvYgKfdGo0Xbq9HPkN0keCzDi3CqoJb0LZpd9Py6AfJ3x9l7vU0NeakJ7IXN9ETj4GYwhMP63vPWAEteJH5M94B4LTjBpW92zCd1zTXabRHyIk6EiswNbBG7hpA14XitipLNdikseWA5RHcNV4FvTDLDsBSfD4hIoxNNWQniouG03cNoysjpjEByYnGuoJL6kw8CQXqeqY5zecjz3FD39SNxCsAj3KGNk8kOBqhVMmiCDJw7Mh7S6V71N4eDfcCwfAF8QviZYzJiBhmEYLY5Uj0HKRe7hQlMv3RjaFh4kZHqYUwPYGDdw6zVHLDTssKkOyfgoyHikIsX6u5k3s0puf6KiUVeLOiHLX9h9v2EXiQPnBal1QwhsyJncwW4Csma2k6rm2W8JjtU78OfV1gEOokHpivMkjlVwyql6Ha0UskrJtzsV78KVgRmsULDiy8Rpy4NpWnear1GBkLz0K24nd8LnGEjTXuZyiEYbVdWsZX3c8cJTq3gWX82hAtQw8KuGYInNOFlpvYArLk1Jy1RY4Am6AAiSr90quTGdYMEodC461scfNghwRiCL2l2nPUIcbLNO1CWZgBgHRTw5CSaYYOuIEcmzseqv7G7MdRSDfBw5ey1AUNF6O2TY2Wx9VWxMK5V1sWnoOTFby2nuG352yRsvsZwioY9juXzbc5B4R3hKkfk761Cf63y805Mh4IJxpbhtW1H8CsHRGOpajdmkxLg54DDUL12EBdy9eEM2eqcV9CrSBo7JByF8W0bfmjSPaaPohnNOIhwKgstLQuF04pzbAHdyjS1CW3mPowmObVAp3JhFBD1c4saWJwf6OeBfM8qAcmtielhMsaIMWq2KRXHup0U4u1aKGnZ8hGTXnhxN8p9rSSzEhBcdv7Oql8sbYTPAu3qpr0JyvAN8LhIBJg2sdpd1LZ9SptJyUJ0bxOuQmdlqpEDRQ8txtdEEDF'
};

export const EMOJI_SINGLE = [
    { lable: 'wink', value: ';-)' },
    { label: 'sad', value: ':-(' },
    { label: 'mask', value: ':mask:' },
    { label: 'joy', value: ':joy' },
    { label: 'smirk', value: ':smirk:' }
];

export const EMOJI_MULTI = [
    { label: 'happy-set', value: ';-) ;-P :joy :smiley: :smile:' },
    { label: 'sad-set', value: ':-( :| ' },
    { label: 'charactor-set', value: ':boy: :older_man: :cop: :woman:' },
    { label: 'icons-set', value: ':sunny: :zap: :dog: :tiger: :ant:' }
];

export const JS_SNIPPETS_VALID = [
    { label: 'example1', value: "str.toUpperCase()" },
    { label: 'example2', value: "let obj={1: 125, 2: 149.7};" },
    { lable: 'example3', value: "alert('Welcome')" },
    { lable: 'example4', value: "alert('Welcome')" }

];

export const JS_SNIPPETS_INVALID = [
    { label: 'example1', value: "str.toUpperCase;" },
    { label: 'example2', value: "str.tolowercase();" },
    { label: 'example3', value: "let a={1=125, 2=149.7};" },
    { label: 'example4', value: "alert(((();" }
];