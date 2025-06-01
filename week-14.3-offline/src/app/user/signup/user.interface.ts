export interface SignUpResp {
  data: {
    body: {
      username: string;
      password: string;
    };
  };
}

export interface ErrorResp {
  response: {
    data: {
      message: string;
    };
  };
}
