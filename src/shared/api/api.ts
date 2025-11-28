class Api {
  private static BASE_URL: string = "https://jsonplaceholder.typicode.com";

  private static async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}. Details: ${errorText}`
      );
    }

    return response.json() as Promise<T>;
  }

  public static async get<T>(path: string): Promise<T> {
    const url = `${Api.BASE_URL}${path}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return Api.handleResponse<T>(response);
  }

  public static async post<T>(path: string, body: object): Promise<T> {
    const url = `${Api.BASE_URL}${path}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return Api.handleResponse<T>(response);
  }

  public static async put<T>(path: string, body: object): Promise<T> {
    const url = `${Api.BASE_URL}${path}`;

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return Api.handleResponse<T>(response);
  }

  public static async delete<T>(path: string): Promise<T> {
    const url = `${Api.BASE_URL}${path}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 204) {
      return {} as T;
    }

    return Api.handleResponse<T>(response);
  }
}

export default Api;
