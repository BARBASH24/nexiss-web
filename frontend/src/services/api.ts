const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

export interface User {
  id: number
  email: string
  name: string
  plan?: string
}

export interface AuthResponse {
  token: string
  user: User
}

export interface UserStats {
  coding_hours: number
  projects_count: number
  ai_requests: number
}

class ApiService {
  private getAuthHeader() {
    const token = localStorage.getItem('token')
    return token ? { Authorization: `Bearer ${token}` } : {}
  }

  async register(email: string, password: string, name: string): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Registration failed')
    }

    const data = await response.json()
    localStorage.setItem('token', data.token)
    return data
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Login failed')
    }

    const data = await response.json()
    localStorage.setItem('token', data.token)
    return data
  }

  async getProfile(): Promise<User> {
    const response = await fetch(`${API_URL}/user/profile`, {
      headers: this.getAuthHeader()
    })

    if (!response.ok) {
      throw new Error('Failed to fetch profile')
    }

    return response.json()
  }

  async getStats(): Promise<UserStats> {
    const response = await fetch(`${API_URL}/user/stats`, {
      headers: this.getAuthHeader()
    })

    if (!response.ok) {
      throw new Error('Failed to fetch stats')
    }

    return response.json()
  }

  async updateProfile(name: string, email: string): Promise<User> {
    const response = await fetch(`${API_URL}/user/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...this.getAuthHeader()
      },
      body: JSON.stringify({ name, email })
    })

    if (!response.ok) {
      throw new Error('Failed to update profile')
    }

    return response.json()
  }

  async upgradePlan(plan: string, paymentMethod: string): Promise<{ success: boolean; message: string; user: User }> {
    const response = await fetch(`${API_URL}/user/upgrade-plan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.getAuthHeader()
      },
      body: JSON.stringify({ plan, paymentMethod })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to upgrade plan')
    }

    return response.json()
  }

  logout() {
    localStorage.removeItem('token')
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token')
  }
}

export const api = new ApiService()
