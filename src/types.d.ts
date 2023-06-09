export interface Sub {
    nick: string
    subMonths: number
    avatar: string
    description?: string
  }


export interface SubsResponseFromAPI {
  nick: string
  months: number
  profileUrl: string
  description: string
}