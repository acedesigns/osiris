/* =======================================================
 *
 * Created by anele on 2020/10/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

export interface UserInterface {
    gender: string;
    name: UserCred;
    location: LocationDetails;
    email: string;
    login: LogInDetails;
    dob: DOBDetails;
    registered: Array<RegistrationDetails>;
    phone: string;
    cell: string;
    id: string;
    picture: string;
}

export class RegistrationDetails {
    date: string;
    age: number
}

export class DOBDetails {
    date: string;
    age: number
}

export class UserCred {
    title: string;
    first: string;
    last: string;
}

export  class LocationDetails {
    street: StreetDetails;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: CoordinatesDetails;
    timezone: TimeZoneDetails;
}

export class StreetDetails {
    number: number;
    name: string
}

export class TimeZoneDetails {
    offset: string;
    description: string
}

export class CoordinatesDetails {
    latitude: string;
    longitude: string
}

export class LogInDetails {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}