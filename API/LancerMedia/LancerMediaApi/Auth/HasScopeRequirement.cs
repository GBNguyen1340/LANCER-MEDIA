using Microsoft.AspNetCore.Authorization;

namespace LancerMediaApi.Auth
{
    public class HasScopeRequirement : IAuthorizationRequirement
    {
        public string Scope { get; set; }
        public string Issuer { get; set; }

        public HasScopeRequirement(string scope, string issuer)
        {
            Scope = scope ?? throw new ArgumentNullException(nameof(scope));
            Issuer = issuer ?? throw new ArgumentNullException(nameof(issuer));
        }
    }
}
