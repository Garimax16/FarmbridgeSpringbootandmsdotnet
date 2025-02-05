namespace FarmBridge.Helper
{
    public class AppSettings
    {
    private IConfiguration _configuration;
        public string Secret {  get; set; }
        
        public AppSettings() { }
        
        
        
        public AppSettings(IConfiguration configuration)
        {
            this._configuration = configuration;
            this.Secret = configuration["Jwt:Key"];
        }
    
    
    }



}
