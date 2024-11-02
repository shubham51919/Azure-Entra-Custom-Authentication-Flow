# Custom Template for Azure Entra MSAL Authentication using Redirect 🔐

A clean implementation of Microsoft Authentication Library (MSAL) for React applications with automatic redirect flow. It doesn't require any login or sign in button event trigger. It auto handles everything using msal.

## Features 🌟
- Automatic authentication without button triggers
- Prevents infinite loops during redirect
- Handles token management
- Handle any existing redirect promise
- Handle already logged in user
- Clean error handling
- Protected routes setup
- Silent token acquisition
- Secure token storage in session
- Seamless redirect experience
- Built-in loading states

## Benefits 💪
- Zero-configuration authentication flow
- Improved user experience with automatic login
- Reduced authentication-related code complexity
- Secure token management
- Built-in error recovery mechanisms
- Optimized for Azure Entra ID (formerly Azure AD)

## Key Concepts 📚
1. **Authentication Flow**
   - Automatic redirect handling
   - Silent token acquisition
   - Session management
   - Token refresh mechanism

2. **State Management**
   - Login state tracking
   - Token storage
   - Authentication progress monitoring
   - Error state handling

3. **Security Features**
   - Secure token storage
   - CSRF protection
   - Token encryption
   - Automatic token renewal

4. **User Experience**
   - Seamless authentication
   - Loading states
   - Error notifications
   - Redirect handling

## Prerequisites 📋
- Azure Entra ID (Azure AD) tenant
- Registered application in Azure Portal
- Node.js and npm installed
- React development environment

## Setup Instructions 🚀

1. Clone the repository
```bash
git clone https://github.com/shubham51919/azure-entra-msal-auth.git
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
REACT_APP_CLIENT_ID=your_client_id
REACT_APP_TENANT_ID=your_tenant_id
REACT_APP_REDIRECT_URI=your_redirect_uri
```

4. Start development server
```bash
npm start
```

## Dependencies 📦
- @azure/msal-react
- @azure/msal-browser
- react-router-dom

## Best Practices 🎯
1. **Security**
   - Use secure token storage
   - Implement proper error handling
   - Regular token refresh
   - Secure configuration management

2. **Performance**
   - Optimize redirect handling
   - Minimize authentication delays
   - Efficient token management
   - Prevent unnecessary redirects

3. **User Experience**
   - Clear loading states
   - Informative error messages
   - Smooth navigation flow
   - Minimal user intervention

4. **Code Organization**
   - Separate authentication logic
   - Clean component structure
   - Clear configuration files
   - Proper type definitions

## Common Issues and Solutions 🔧
1. **Infinite Redirect Loops**
   - Implementation includes guards against multiple redirects
   - Proper state management
   - Clear redirect conditions

2. **Token Management**
   - Secure storage implementation
   - Automatic refresh mechanism
   - Clear token lifecycle

3. **Error Handling**
   - Comprehensive error catching
   - User-friendly error messages
   - Recovery mechanisms

## Contributing 🤝
Contributions are welcome! Please feel free to submit a Pull Request.

## Future Improvements 🚀
- [ ] Add multi-tenant support
- [ ] Implement role-based authentication
- [ ] Add comprehensive logging
- [ ] Enhance error recovery
- [ ] Add unit tests
- [ ] Improve documentation
- [ ] Add performance monitoring

## Support 📫
For support, please create an issue in the repository.

## Acknowledgments 🙏
- Microsoft Authentication Library (MSAL) team
- Azure Identity platform
- React community
- Contributors and maintainers

---

This template shows a customized solution for the infinte loop issue faced when login event is auto triggered. Feel free to customize it according to your needs.
