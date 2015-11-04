describe ('terminal-calendar', () => {

    var robot;

    beforeEach(() => {
        robot = {
            respond: sinon.spy(),
            hear: sinon.spy()
        };
        require('../src/terminal-calendar')(robot);
    });

    it('registers a respond listener', () => {
        robot.respond();
        expect(robot.respond).to.have.been.calledWith(/calendar( me)?/i);
    });


});
